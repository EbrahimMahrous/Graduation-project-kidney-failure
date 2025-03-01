




// ** Interface
interface ISection{
    sectionId: string;
}

export default function OurServices({sectionId}: ISection) {
    return (
        <>
            <section id = {sectionId}>
                <div style={{textAlign: 'center' , margin: '280px'}}>
                    OurServices
                </div>  
            </section>  
        </>
    );
}
