import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-top: 50px;

  .search {
    flex: 0.8;
  }

  p {
    color: #bf1650;
    font-size: 12px;
  }
  
  p::before {
    display: inline;
    content: "⚠ ";
  }

  .react-datepicker-wrapper {
    width: 22%;

    .react-datepicker__input-container {
      input {
        padding: 14px;
        border: 1px solid #4c9196;
      }
    }
  }
`;

export const FieldSetSearch = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 800px;
  margin: 0 auto;
`;

export const SearchLabel= styled.label`
  margin-bottom: 15px;
`;



export const TextField = styled.input`
  height: 25px;
  border: 1px solid #4c9196;
  outline: none;
  padding: 9px;
`;

export const SubmitButton = styled.input`
  background-color: #4db2b9;
  color: white;
  height: 46px;
  width: 120px;
  outline: none;
  border: none;
  font-weight: 600;
`;

export const NewsContainer = styled.div`
  margin-top: 50px;
  display: grid;
  grid-template-columns: repeat(2, 50%);
  grid-gap: 0 20px;
`;

export const NewsItem = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 4px;
  height: 120px;
  margin-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #dfecf0;
`;

export const NewsContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.8;
  padding: 0 20px 0 20px;
  justify-content: space-between;
`;

export const NewsTitle = styled.div`
  
`;

export const NewsAuthorAndDate = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NewsAuthor = styled.div`
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  color: #868e95;
`;

export const NewsPublishedAt = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #282828;
  mix-blend-mode: normal;
  opacity: .85;
  margin-bottom: 5px;
`;

export const NewsImg = styled.div`
  flex: 0.2;
  
  img {
    width: 158px;
    height: 113px;
    border-radius: 4px;  
  }
`;




