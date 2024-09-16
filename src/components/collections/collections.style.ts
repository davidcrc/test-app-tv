import styled from "styled-components";

export const CollectionsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  overflow-y: auto;
  height: calc(100vh);
  padding: 20px;
  gap: 20px;

  &::-webkit-scrollbar {
    display: none;
  }
`;