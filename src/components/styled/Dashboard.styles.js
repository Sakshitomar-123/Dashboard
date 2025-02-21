import styled from 'styled-components';

// Styled Components
export const DashboardContainer = styled.div`
  padding: 24px;
  background: #f5f6fa;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  margin-bottom: 24px;
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 24px;
`;
