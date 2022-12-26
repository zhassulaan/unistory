import React from "react";
import styled from "styled-components";
import mars from "../assets/3553.png";
import border from "../assets/border.png";

function Hero() {
	return (
		<div className="content">
			{/* Text Box in the left side */}
			<TextBox>
				<h1 text-anchor="middle" className="title">Explore Your own planet</h1>
				<h1 text-anchor="middle" className="title">
					In <span>our New</span> metaverse
				</h1>
				
				<div className="mask">
					<div className="orange">
						<h1 text-anchor="middle" className="title">Explore Your own planet</h1>
						<h1 text-anchor="middle" className="title">
							In <span>our New</span> metaverse
						</h1>
					</div>
				</div>

				<p className="text">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat.
				</p>

				<div className="images">
					<img src={border} alt="border" className="border" />
					<img src={mars} alt="mars" className="mars" />
				</div>
			</TextBox>

			{/* Info Box in the right side */}
			<InfoBox>
				<h2 className="title">Roadmap stats</h2>

				<h3 className="number">12, 345</h3>
				<h5 className="text">Lorem ipsum dolor</h5>

				<div className="line"></div>

				<h3 className="number">12, 345</h3>
				<h5 className="text">Lorem ipsum dolor</h5>

				<div className="line"></div>

				<h3 className="number">12, 345</h3>
				<h5 className="text">Lorem ipsum dolor</h5>
			</InfoBox>
		</div>
	);
}

const TextBox = styled.section`
	margin-top: 10.9375rem;

	@keyframe rotate {
		100% {
			transform: rotate(360deg);
		}
	}

	.title {
		line-height: 7.5rem;
		font-size: 120px;
		color: var(--clr-white);
	}

	.mask {
		width: 20rem;
		height: 20.125rem;
		-webkit-mask-image: url(${mars});
		mask-image: url(${mars});
		-webkit-mask-repeat: no-repeat;
		mask-repeat: no-repeat;   
		margin: -18.1875rem 0 0 41.4375rem;
	}

	.orange {
		width: max-content;
		padding-top: 3.1875rem;
		margin-left: -41.4375rem;
	}
	
	.orange .title {
		color: var(--clr-primary-1);
	}

	.title span {
		color: transparent;
		font-weight: 400;
		-webkit-text-stroke: 1px var(--clr-white);
	}

	.text {
		width: 25.3125rem;
		margin-top: 2.8125rem;
	}

	.images {
		position: absolute;
		top: 0;
		z-index: -1;
		margin-left: 33.625rem;
	}

	.border,
	.mars {
		position: absolute;
		top: 0;
	}
	
	.mars {
		border-right: 0.5px solid var(--clr-primary-1);
		border-top-right-radius: 50%;
		border-bottom-right-radius: 50%;
		margin: 2.5625rem;
		padding: 5.125rem 5.1875rem;
	}
`

const InfoBox = styled.section`
	width: 12.4375rem;
	margin-top: 10.8125rem;
	text-align: center;

	.title {
		color: var(--clr-white);
		margin-bottom: 2.625rem;
	}

	.number {
		margin: 0.5rem 0 0.75rem;
	}

	.text {
		margin-bottom: 0.5rem;
	}

	.line {
		width: 100%;
		height: 0.03125rem;
		background-color: var(--clr-primary-7);
	}
`

export default Hero;