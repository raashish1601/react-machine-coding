import { useEffect, useRef, useState } from "react";
import styles from "./MultiselectInput.module.scss";
import Pill from "./Pill";

function MultiselectInput() {
    const [searchTerm, setSearchTerm] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [selectedUsers, setSelectedUsers] = useState([]);
    const [selectedUserSet, setSelectedUserSet] = useState(new Set());
    const [activeSuggestion, setActiveSuggestion] = useState(0);

    const inputRef = useRef(null);

    useEffect(() => {
        const fetchUsers = () => {
            setActiveSuggestion(0);
            if (searchTerm.trim() === "") {
                setSuggestions([]);
                return;
            }

            fetch(`https://dummyjson.com/users/search?q=${searchTerm}`)
                .then((res) => res.json())
                .then((data) => setSuggestions(data))
                .catch((err) => {
                    console.error(err);
                });
        };
        fetchUsers();
    }, [searchTerm]);

    useEffect(() => {
        // Set focus on input element when component mounts
        inputRef.current.focus();
    }, []);

    const handleSelectUser = (user) => {
        setSelectedUsers([...selectedUsers, user]);
        setSelectedUserSet(new Set([...selectedUserSet, user.email]));
        setSearchTerm("");
        setSuggestions([]);
        inputRef.current.focus();
    };

    const handleRemoveUser = (user) => {
        const updatedUsers = selectedUsers.filter(
            (selectedUser) => selectedUser.id !== user.id
        );
        setSelectedUsers(updatedUsers);

        const updatedEmails = new Set(selectedUserSet);
        updatedEmails.delete(user.email);
        setSelectedUserSet(updatedEmails);
    };

    const handleKeyDown = (e) => {
        if (
            e.key === "Backspace" &&
            e.target.value === "" &&
            selectedUsers.length > 0
        ) {
            const lastUser = selectedUsers[selectedUsers.length - 1];
            handleRemoveUser(lastUser);
            setSuggestions([]);
        } else if (e.key === "ArrowDown" && suggestions?.users?.length > 0) {
            e.preventDefault();
            setActiveSuggestion((prevIndex) =>
                prevIndex < suggestions.users.length - 1 ? prevIndex + 1 : prevIndex
            );
        } else if (e.key === "ArrowUp" && suggestions?.users?.length > 0) {
            e.preventDefault();
            setActiveSuggestion((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
        } else if (
            e.key === "Enter" &&
            activeSuggestion >= 0 &&
            activeSuggestion < suggestions.users.length
        ) {
            handleSelectUser(suggestions.users[activeSuggestion]);
        }
    };

    return (
        <div className={styles["userSearchContainer"]}>
            <div className={styles["userSearchContainer_input"]}>
                {selectedUsers.map((user) => {
                    return (
                        <Pill
                            key={user.email}
                            image={user.image}
                            text={`${user.firstName} ${user.lastName}`}
                            onClick={() => handleRemoveUser(user)}
                        />
                    );
                })}
                <div>
                    <input
                        ref={inputRef}
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search For a User..."
                        onKeyDown={handleKeyDown}
                    />
                    <ul className={styles["userSearchContainer_input_suggestionsList"]}>
                        {suggestions?.users?.map((user, index) => {
                            return !selectedUserSet.has(user.email) ? (
                                <li
                                    className={index === activeSuggestion ? styles["userSearchContainer_input_suggestionsList--active"] : ""}
                                    key={user.email}
                                    onClick={() => handleSelectUser(user)}
                                >
                                    <img
                                        src={user.image}
                                        alt={`${user.firstName} ${user.lastName}`}
                                    />
                                    <span>
                                        {user.firstName} {user.lastName}
                                    </span>
                                </li>
                            ) : (
                                <></>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default MultiselectInput;