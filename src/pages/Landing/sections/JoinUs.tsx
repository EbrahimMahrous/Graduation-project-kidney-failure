




// ** Interface
interface ISection{
    sectionId: string;
}

export default function JoinUs({sectionId}: ISection) {
    return (
        <>
            <section id = {sectionId}>
                <div style={{textAlign: 'center' , margin: '280px'}}>
                    JoinUs
                </div>  
            </section>  
        </>
    );
}
