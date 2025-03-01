




// ** Interface
interface ISection{
    sectionId: string;
}

export default function PatientReviews({sectionId}: ISection) {
    return (
        <>
            <section id = {sectionId}>
                <div style={{textAlign: 'center' , margin: '280px'}}>
                    PatientReviews
                </div>  
            </section>  
        </>
    );
}
