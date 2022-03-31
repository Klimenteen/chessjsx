import '../src/fonts/fonts.scss'
import ArtistPageAgutin  from "./components/artist_page/ArtistPage";
import ArtistPageQuartet from "./components/artist_page/ArtistPage2";

import Menu from "./components/menu/Menu";
import LectureHall from "./components/lecture_hall/LectureHall";
import Gastronomy from './components/gastronomy/Gastronomy';
import MobileMenu from './components/mobile_menu/MobileMenu';
import MobileArtistPageAgutin from './components/mobile_artist_page/MobileArtistPageAgutin';
import MobileArtistPageQuartet from './components/mobile_artist_page/MobileArtistPageQuartet';

import MobileGastronomy from './components/mobile_gastronomy/MobileGastronomy';
import MobileLectureHall from './components/mobile_lecture_hall/MobileLectureHall';
import MobileViewer from './components/mobile_viewer/MobileViewer';


function App() {
	return (
	<div className="App">
		{window.innerWidth > 1023 ? (
			<>
				{/* <Menu /> */}
				<ArtistPageAgutin  />
				<ArtistPageQuartet />
				{/* <LectureHall />
				<Gastronomy /> */}
			</>
		) : (
			<>
				{/* <MobileMenu /> */}
				<MobileArtistPageAgutin />
				<MobileArtistPageQuartet />
				{/* <MobileGastronomy />
				<MobileLectureHall />
				<MobileViewer /> */}
			</>
		)}
	</div>);
}

export default App;
