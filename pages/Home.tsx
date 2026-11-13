import SearchBar from "../components/SearchBar.js";
import styled from "styled-components";

export const Container = styled.div`
    padding: 30px;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

function Home() {
    return (
        <Container>
            <h1>Movie Search</h1>
            <SearchBar />
        </Container>
    );
}

export default Home;




// (2) SearchBar의 keyword는 input에 넣어지는 값과 관련 있는 state  <= string

// 1. SearchBar에 존재하는 Props {keyword}:{keyword?:string}

// 2. SearchBar에 존재하는 Props {keyword}:{keyword:string}