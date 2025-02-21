import React  from 'react';
import styled, { keyframes }  from 'styled-components';

// Animations
const pulse = keyframes`
  0% { opacity: 0.6; }
  50% { opacity: 1; }
  100% { opacity: 0.6; }
`;

const LoadingCard = styled.div`
  background: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  height: ${props => props.height || '200px'};
`;

const SkeletonLine = styled.div`
  height: ${props => props.height || '20px'};
  width: ${props => props.width || '100%'};
  background: #e2e8f0;
  border-radius: 4px;
  margin-bottom: ${props => props.mb || '12px'};
  animation: ${pulse} 1.5s ease-in-out infinite;
`;


export const LoadingSkeleton = ({ height, lines = 3 }) => (

  <LoadingCard height={height}>
    {Array(lines).fill(0).map((_, index) => (
      <SkeletonLine 
        key={index}
        width={`${Math.random() * 20 + 80}%`}
        height={index === 0 ? '24px' : '16px'}
        mb={index === lines - 1 ? '0' : '12px'}
      />
    ))}
  </LoadingCard>
);