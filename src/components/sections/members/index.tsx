import MemberCard from "../../cards/member";

const Members = () => {
    return ( 
        <div className="container lg:max-w-[80rem] lg:w-[80%] md:w-[95%] w-[80%]  mx-auto">
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 py-8">
                <MemberCard />
                <MemberCard />
                <MemberCard />
                <MemberCard />
                <MemberCard />
                <MemberCard />
            </div>
        </div>
     );
}
 
export default Members;