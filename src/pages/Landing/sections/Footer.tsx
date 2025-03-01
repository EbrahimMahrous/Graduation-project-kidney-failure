




// ** Interface
interface ISection{
    sectionId: string;
}

export default function Footer({sectionId}: ISection) {
    return (
        <>
            <section id = {sectionId}>
                <div style={{textAlign: 'center' , margin: '280px'}}>
                    Footer
                </div>  
            </section>  
        </>
    );
}
