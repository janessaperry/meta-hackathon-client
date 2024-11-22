import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./ResultsPage.scss";

function ResultsPage() {
	const baseApiUrl = import.meta.env.VITE_API_URL;
	const { postId } = useParams();
	const [results, setResults] = useState([]);
	const [activeTab, setActiveTab] = useState("posts");

	const getImages = async (type) => {
		try {
			const response = await axios.get(`${baseApiUrl}/${type}/${postId}`);

			if (type === "posts") {
				const images = response.data.pageData.images;
				setResults(images);
			}

			if (type === "profiles") {
				const profiles = response.data.pageData.profiles;
				setResults(profiles);
				console.log(profiles);
			}
		} catch (error) {
			console.error(`Error fetching ${type} data:`, error);
		}
	};

	useEffect(() => {
		getImages(activeTab);
	}, [postId, activeTab]);

	return (
		<main>
			<div className="header">
				<div className="header__back-icon">
					<span className="material-icons">chevron_left</span>
				</div>

				<div className="header__query-wrapper">
					<img
						className="header__query-image"
						src="https://placecats.com/44/44"
						alt="Thumbnail of visual search query"
					/>
				</div>
			</div>

			<nav className="tabs">
				<ul className="tabs__list">
					<li
						className={`tabs__item ${activeTab === "posts" && "active"}`}
						onClick={() => {
							setActiveTab("posts");
						}}
					>
						Posts
					</li>
					<li
						className={`tabs__item ${activeTab === "profiles" && "active"}`}
						onClick={() => {
							setActiveTab("profiles");
						}}
					>
						Accounts
					</li>
					<li className="tabs__item">Reels</li>
				</ul>
			</nav>

			<div className="results">
				{activeTab === "posts" && (
					<div className="posts__list">
						{results.map((url, index) => {
							return (
								<div key={index} className="posts__image-item">
									<img
										className="posts__image"
										src={url}
										alt="Instagram post"
									/>
								</div>
							);
						})}
					</div>
				)}

				{activeTab === "profiles" &&
					results.map((profile, index) => {
						return (
							<div key={index} className="profile">
								<div className="profile__title">
									<img className="profile__image" src={profile.profilePhoto} />
									<p className="profile__name">{profile.profileName}</p>
								</div>

								<div className="posts__list">
									{profile.profilePosts?.map((url, index) => {
										return (
											<div key={index} className="posts__image-item">
												<img
													className="posts__image"
													src={url}
													alt="Instagram post"
												/>
											</div>
										);
									})}
								</div>
							</div>
						);
					})}
			</div>
		</main>
	);
}

export default ResultsPage;
