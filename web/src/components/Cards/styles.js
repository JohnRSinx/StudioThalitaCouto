import styled from "styled-components";

export const Container = styled.div`
  width: 60%;
  background: var(--pink-200);
  border-radius: 2px;
  padding: 0.5rem 0rem; 
  margin-bottom: 0.5rem;
  :hover { background-color: var(--pink-400); }

  @media (max-width:768px) {
  width: 100%;
}
article {
  
}
.contentHeader{
  border-radius: 4px;
  margin: 0.25rem 5rem;
  padding: 0.25rem; 
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--pink-100);
  color: var(--green-800);
}
time {
  font-size: 1.25rem;
}

.trashButton{
  padding: 0.25rem;
  background: none;
  border: none;
  color: var(--green-800);
  transition: background-color 0.1s;
  cursor: initial;
  

  :hover {
    background-color: var(--pink-400);
  }
}
.infoClient {
  padding: 0.5rem 0.5rem
}

.categoryInfo {
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 0.25rem ;
  margin: 0.25rem;
  border-radius: 4px;
  background-color: var(--pink-100);
  color: var(--green-800);
}

  
`