




// ** Interface
interface ISection{
    sectionId: string;
}

export default function Benefit({sectionId}: ISection) {
    return (
        <>
            <section id = {sectionId}>
                <div style={{textAlign: 'center' , margin: '280px'}}>
                    Benefit
                </div>  
            </section>  
        </>
    );
}
