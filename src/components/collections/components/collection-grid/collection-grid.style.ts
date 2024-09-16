import styled from "styled-components";

export const CollectionGridContainer = styled.div`
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: calc(33.33% - 20px);
  min-width: 234px;
  max-width: 234px;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    width: calc(50% - 20px);
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;