import Header from "./components/Header/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import PostsListPage from "./pages/PostsListPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import Footer from "./components/Footer/Footer";
import SinglePostPage from "./pages/SinglePostPage";
import MobileNav from "./components/MobileNav/MobileNav";

const App = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <Header />

                <Switch>
                    <Route path="/" component={HomePage} exact />
                    <Route
                        path="/posts/:postId"
                        component={SinglePostPage}
                        exact
                    />
                    <Route path="/posts" component={PostsListPage} exact />

                    <Route path="/about" component={AboutPage} exact />
                </Switch>

                <MobileNav />

                <Footer />
            </div>
        </BrowserRouter>
    );
};

export default App;
