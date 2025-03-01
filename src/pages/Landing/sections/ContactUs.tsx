




// ** Interface
interface ISection{
    sectionId: string;
}

export default function ContactUs({sectionId}: ISection) {
    return (
        <>
            <section id = {sectionId}>
                <div style={{textAlign: 'center' , margin: '280px'}}>
                    ContactUs
                </div>  
            </section>  
        </>
    );
}
