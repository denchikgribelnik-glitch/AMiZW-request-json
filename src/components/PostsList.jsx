import { useEffect, useState } from "react";
import "./PostsList.css";

function PostsList() {
    const [posts, setposts]=useState([]);
    const [loading,setloading]=useState(false);
    const [error,seterror]=useState("");
    const fetchPosts = async () => {
        setloading(true);
        seterror("");

        // TODO:
        // Ustaw loading na true

        // TODO:
        // Wyczyść poprzedni błąd

        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            if(response.ok){
                throw new ERROR("nie udalo sie pobrac z aplikacji dannych")
                }
                const data = await response.json ();
                const parsedpost = data.slice(0,10).nap((post) => ({
                    id : post.id,
                    title : post.title,
                    body : post.body
                })) ;
                setposts(parsedpost);
            // TODO:
            // Pobierz dane z API:
            // https://jsonplaceholder.typicode.com/posts

            // TODO:
            // Sprawdź, czy odpowiedź jest poprawna

            // TODO:
            // Sparsuj odpowiedź do JSON

            // TODO:
            // Zapisz tylko 10 pierwszych postów do stanu
        } catch (err) {
            seterror(error.message);
            setposts([]);
            // TODO:
            // Zapisz błąd do stanu
        } finally {
            setloading(false);
            // TODO:
            // Zakończ loading
        }
    };

    useEffect(() => {
        fetchPosts();

        // TODO:
        // Wywołaj funkcję pobierającą dane po załadowaniu komponentu
    }, []);

    return (
        <section className="posts-section">
            <div className="posts-container">
                <div className="posts-header">
                    <div>
                        <h1>Lista postów</h1>
                        <p>Pobieranie danych z API w React</p>
                    </div>

                    <button onClick={fetchPosts} disabled={loading} className="reload-btn">
                        {loading ?"pobierania...":"pobierz ponownie"}
                    </button>
                </div>

                {loading && (
                    <p className="info-message">Ładowanie danych...</p>
                )}
                {error && (
                    <p>style={{color:"red"}}
                    blad: {error}
                    </p>
                )}
                {!loading && !error && post.lenght === 0 && (
                    <p>brak postow do wyswietlenia </p>
                )}
                {!loading && !error && post.lenght > 0 && (
                    <div>
                        {posts.map((post) => (
                            <article key={post.id}>
                                <h3>{post.title} </h3>
                                <p>{post.body}</p>
                            </article>
                        ))}
                    </div>

                )}
                {/* TODO:
            Wyświetl komunikat błędu, jeśli wystąpił */}

                {/* TODO:
            Wyświetl listę postów, jeśli dane zostały pobrane poprawnie */}

                {/* TODO:
            Użyj map() do wyrenderowania postów */}

                {/* TODO:
            W każdej karcie pokaż:
            - id posta
            - tytuł
            - treść */}
            </div>
        </section>
    );
}

export default PostsList;