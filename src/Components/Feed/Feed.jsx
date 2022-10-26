import React from "react";
import PropType from "prop-types";
import FeedPhotos from "./FeedPhotos";
import FeedModal from "./FeedModal";
import Head from "../Ui/Head/Head";
import {useDispatch, useSelector} from "react-redux";
import {loadMorePhotos, resetFeed} from "../../store/feed";
import Loading from "../Ui/Loading/Loading";
import Error from "../Ui/Error/Error";
import styles from "./Styles/Feed.module.css";

const Feed = ({user}) => {

    const {list, isInfinity, loading, error} = useSelector(
        (state) => state.feed
    );
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(resetFeed());
        dispatch(loadMorePhotos({total: 6, user}));
    }, [dispatch, user]);

    React.useEffect(() => {
        let wait = false;
        const infiniteScroll = () => {
            if (isInfinity) {
                const scroll = window.scrollY;
                const height = document.body.offsetHeight - window.innerHeight;
                if (scroll > height * 0.75 && !wait) {
                    wait = true;
                    dispatch(loadMorePhotos({total: 6, user}));
                    setTimeout(() => {
                        wait = false;
                    }, 500);
                }
            }
        };
        window.addEventListener("wheel", infiniteScroll);
        window.addEventListener("scroll", infiniteScroll);

        return () => {
            window.removeEventListener("wheel", infiniteScroll);
            window.removeEventListener("scroll", infiniteScroll);
        };
    }, [isInfinity, dispatch, user]);
    return (
        <section className="container mid-container">
            <Head title={"Feed"} description={"Acompanhe o feed de fotos"}/>
                <FeedModal/>
            {list.length > 0 && <FeedPhotos/>}
            {loading && <Loading/>}
            {error && <Error error={error}/>}
            {isInfinity === false && (
                <p className={styles.noPhotos}>Não existem mais fotos</p>
            )}
        </section>
    );
};

Feed.defaultProps = {
    user: 0,
};

Feed.PropType = {
    user: PropType.oneOfType([
        PropType.string.isRequired,
        PropType.number.isRequired,
    ]),
};
export default Feed;
