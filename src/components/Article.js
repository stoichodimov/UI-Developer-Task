import React from 'react';
import styled from 'styled-components';

export default function Article({ img, title, excerpt, category }) {
	return (
		<Wrapper>
			<img src={img} alt="article" />
			<div className="article-preview">
				<a href="##" className="title">
					{title}
				</a>
				<p className="excerpt">{excerpt}</p>
				<p className="category">{category}</p>
			</div>
		</Wrapper>
	);
}

const Wrapper = styled.article`
	background-color: #fff;
	transition: var(--transition);
	margin-bottom: 1.2rem;
	img {
		height: 115px;
		object-fit: cover;
	}
	.article-preview {
		display: grid;
		grid-template-rows: auto 75px auto;
		padding: 0.4rem;
	}
	.title {
		color: var(--clr-gray-2);
		font-size: 0.9rem;
		font-weight: bold;
		margin-bottom: 0.4rem;
		transition: var(--transition);
	}
	.title:hover {
		color: #1865ad;
	}
	.excerpt {
		color: var(--clr-grey-3);
		font-size: 0.8rem;
		margin-bottom: 1.4rem;
	}
	.category {
		border-left: 2px solid skyblue;
		color: var(--clr-grey-5);
		font-size: 0.65rem;
		margin-bottom: 0.2rem;
		padding-left: 0.4rem;
	}
	&:hover {
		box-shadow: var(--dark-shadow);
	}
`;
