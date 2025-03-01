




// ** Interface
interface ISection{
    sectionId: string;
}

export default function AboutUs({sectionId}: ISection) {
    return (
        <>
            <section id = {sectionId}>
                <div style={{textAlign: 'center', margin: '280px'}}>
                    AboutUs
                </div>  
            </section>  
        </>
    );
}

