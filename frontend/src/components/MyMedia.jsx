const MyMedia = ({ tweets }) => {
    return (
        <>
            {tweets.map && tweets.map((t) => (
            <div className="flex flex-row items-start gap-3" key={t.id}>
                <img src={t.image} alt="Tweet Image" />
            </div>
            ))}
        </>
        );
    };
    
export default MyMedia;

