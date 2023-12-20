
import lists from "../lists.json";

// Overview component
function Overview() {
    return (
        <div className="overview">
            <div className="overviewDescription">
                <p>FayizIT / README.md</p>
                <h1>Hi I m  Fayiz C J</h1>
                <div className="line" />
                <h2>A React Developer</h2>
                <p>
                    I m a MERN stack Developer, I love coding with HTML, CSS, JavaScript, React, Redux, Tailwind CSS, in fronend Node, Express,MongoDb,PosgrSQL in backend
                </p>
                <p>I m improving in the Backend</p>
                <p>Follow me on my Twitter, Instagram, and YouTube channel</p>
            </div>
            <div className="repositories">
                <div className="repositoriesTitle">
                    <h2>Popular repositories</h2>
                </div>

                <div className="repositoriesContainer">
                    {lists.map((repo, i) => (
                        <div className="repositoriesBox" key={i}>
                            <div className="repositoriesTop">
                                <h3>{repo.repo}</h3>
                                <p>{repo.status}</p>
                            </div>
                            <div className="repositoriesBottom">
                                <p>{repo.Stack}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

// Export the Overview component
export default Overview;
