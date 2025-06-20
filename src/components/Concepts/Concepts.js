import React, { useState, useCallback } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { MapInteractionCSS } from 'react-map-interaction';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Img from 'gatsby-image';

import PageHeader from '@common/PageHeader';
import Button from '@common/Button';
import Grid from '@common/Grid';

import {
  ConceptsWrapper,
  ConceptCard,
  Lightbox,
  LightBoxCloseButton,
} from './Concepts.style';

const Concepts = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  const [isLightboxOpen, setLightboxOpen] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const handleShowAll = () => setShowAll(true);

  const openLightbox = useCallback((img) => {
    setSelectedImg(img);
    setLightboxOpen(true);
  }, []);

  const closeLightBox = (e) => {
    if (e.target.tagName !== 'IMG') {
      setSelectedImg(null);
      setLightboxOpen(false);
    }
  };

  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: { name: { regex: "/^concept_/" }, extension: { regex: "/(jpg|jpeg|png)/" } }
        sort: { fields: name }
      ) {
        edges {
          node {
            childImageSharp {
              fluid(quality: 90, maxWidth: 600) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);

  const imagesToShow = showAll
    ? data.allFile.edges
    : data.allFile.edges.slice(0, 6); // mostrar solo 6 imágenes si showAll es false

  return (
    <ConceptsWrapper id="concepts">
      <PageHeader>Concepts</PageHeader>
      <Grid collapseHeight="1000px" showAll={showAll}>
        {imagesToShow.map((imgNode, index) => (
          <ConceptCard key={index}>
            <div
              style={{ width: '100%', height: '100%' }}
              onClick={() => openLightbox(imgNode)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter') openLightbox(imgNode);
              }}
            >
              <Img
                fluid={imgNode.node.childImageSharp.fluid}
                alt={`Concept ${index + 1}`}
              />
            </div>
          </ConceptCard>
        ))}

        {!showAll && (
          <Button onClick={handleShowAll} className="showall__button">
            Show all
          </Button>
        )}
      </Grid>

      {isLightboxOpen && selectedImg && (
        <Lightbox data-testid="lightbox" onClick={closeLightBox}>
          <MapInteractionCSS>
            <Img
              className="lightbox__gatsbyimage"
              fluid={selectedImg.node.childImageSharp.fluid}
              alt="Selected concept"
            />
          </MapInteractionCSS>

          <LightBoxCloseButton
            tabIndex={0}
            onClick={closeLightBox}
            aria-label="Close Lightbox"
          >
            <FontAwesomeIcon icon="times" size="2x" />
          </LightBoxCloseButton>
        </Lightbox>
      )}
    </ConceptsWrapper>
  );
};

export default Concepts;
