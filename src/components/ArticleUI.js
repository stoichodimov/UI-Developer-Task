import data from './data.js';
import styled from 'styled-components';
import Article from './Article';

export default function ArticleUi() {
	return (
		<Wrapper className="section-center">
			{data.map((article) => {
				return <Article key={article.id} {...article} />;
			})}
		</Wrapper>
	);
}

const Wrapper = styled.section`
	column-gap: 0.7rem;
	display: grid;
	grid-template-columns: repeat(auto-fit, 200px);
	justify-content: center;
	margin-top: 2rem;
`;
