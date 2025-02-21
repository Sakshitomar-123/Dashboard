import styled from "styled-components";

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-bottom: 24px;
  padding-top: 2px;
`;

const StatCard = styled.div`
  background: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  h3 {
    font-size: 14px;
    color: black;
    margin: 0 0 10px 0;
  }

  .value {
    font-size: 24px;
    font-weight: bold;
    color: ${(props) => props.color || "#333"};
  }
`;

const TaskCard = styled.div`
  background: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const TeamCard = styled.div`
  background: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const TeamRow = styled.div`
  margin-bottom: 16px;

  .team-name {
    font-weight: 500;
    margin-bottom: 8px;
  }

  .stats {
    display: flex;
    gap: 12px;
    margin-bottom: 8px;
  }

  .stat {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  .dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
  }
`;

const ProgressBar = styled.div`
  height: 8px;
  background: #eee;
  border-radius: 4px;
  overflow: hidden;

  .fill {
    height: 100%;
    background: ${(props) => props.color};
    width: ${(props) => props.percentage}%;
  }
`;

const Card = styled.div`
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

  @media (max-width: 768px) {
    padding: 16px;
  }
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
`;

const CardTitle = styled.h3`
  font-size: 16px;
  color: #333;
  margin: 0;
`;

const FilterContainer = styled.div`
  display: flex;
  gap: 12px;

  @media (max-width: 768px) {
    width: 100%;
    overflow-x: auto;
    padding-bottom: 4px;
  }
`;

const FilterButton = styled.button`
  padding: 8px 16px;
  border-radius: 6px;
  border: 1px solid #e0e0e0;
  background: ${(props) => (props.active ? "#4C6FFF" : "white")};
  color: ${(props) => (props.active ? "white" : "#666")};
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s;
  white-space: nowrap;

  &:hover {
    background: ${(props) => (props.active ? "#4C6FFF" : "#f8f9fa")};
  }
`;

const ExpenseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
  margin-top: 20px;
`;

const ExpenseCard = styled.div`
  background: ${(props) => props.color || "#f8f9fa"};
  padding: 16px;
  border-radius: 8px;
  color: white;
`;

const ExpenseValue = styled.div`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 8px;
`;

const ExpenseLabel = styled.div`
  font-size: 14px;
  opacity: 0.9;
`;

export { StatCard, StatsContainer, TaskCard, ProgressBar, TeamCard, TeamRow ,FilterButton,FilterContainer,Card,CardHeader,CardTitle,
    ExpenseCard,ExpenseGrid,ExpenseLabel,ExpenseValue
};
