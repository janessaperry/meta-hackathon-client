import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Footer from "../../components/Footer/Footer";
import postImage2 from "../../assets/images/home-image-2.webp";
import "./ResultsPage.scss";

function ResultsPage() {
	const baseApiUrl = import.meta.env.VITE_API_URL;
	const { searchQuery } = useParams();
	const [results, setResults] = useState([]);
	const [activeTab, setActiveTab] = useState("posts");
	const navigate = useNavigate();

	const getImages = async (type) => {
		try {
			const response = await axios.get(`${baseApiUrl}/${type}/${searchQuery}`);

			if (type === "posts") {
				const images = response.data.pageData.images;
				setResults(images);
			}

			if (type === "profiles") {
				const profiles = response.data.pageData.profiles;
				setResults(profiles);
			}
		} catch (error) {
			console.error(`Error fetching ${type} data:`, error);
		}
	};

	useEffect(() => {
		getImages(activeTab);
	}, [searchQuery, activeTab]);

	return (
		<main>
			<div className="top-nav">
				<div className="top-nav__back-icon" onClick={() => navigate("/")}>
					<span className="material-icons">chevron_left</span>
				</div>

				<div className="top-nav__query-wrapper">
					<img
						className="top-nav__query-image"
						src={postImage2}
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

				{activeTab === "profiles" && (
					<>
						<div className="suggestions">
							<div className="suggestions__chip">restaurants</div>
							<div className="suggestions__chip">recipes</div>
							<div className="suggestions__chip">pasta</div>
						</div>
						{results.map((profile, index) => {
							return (
								<div key={index} className="profile">
									<div className="profile__title">
										<img
											className="profile__image"
											src={profile.profilePhoto}
										/>
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
					</>
				)}
			</div>
			<Footer />
		</main>
	);
}

export default ResultsPage;
