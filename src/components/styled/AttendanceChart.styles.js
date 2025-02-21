import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  width: 100%;
  margin-bottom: 24px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const Card = styled.div`
  background: white;
  border-radius: 12px;
  padding: 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

const CardContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const StatsContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const ValueWrapper = styled.div`
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
`;

const Value = styled.span`
  font-size: 1.5rem;
  font-weight: 600;
  color: #1a1a1a;
`;

const Trend = styled.span`
  font-size: 0.875rem;
  color: #666;
`;

const Title = styled.div`
  font-size: 0.875rem;
  color: #666;
`;

const YesterdayStats = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.75rem;
  color: ${props => props.trend >= 0 ? '#10B981' : '#EF4444'};
`;

const IconWrapper = styled.div`
  padding: 0.5rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.bg};
  color: ${props => props.color};
`;

export { IconWrapper ,YesterdayStats,ValueWrapper,Title,Card,CardContent,
    Grid,Trend,Value,StatsContent
}