const ShortenText = ({ word, length }) => {

    const Shortner = ({ text, maxCharacters, ellipsis }) => {
        if (text.length <= maxCharacters) {
            return <div>{text}</div>;
        }

        const truncatedText = text.slice(0, maxCharacters);
        if (ellipsis) {
            truncatedText += ellipsis;
        }

        return (
            <>
                {truncatedText}
                <span>...</span>
            </>
        );
    };

    return (
        <Shortner text={word} maxCharacters={length} />
    );
};

export default ShortenText;