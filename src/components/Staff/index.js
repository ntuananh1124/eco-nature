import { staffList } from "./data"

export default function Staff() {
    return (
        <>
            {
                staffList.map((staff) => 
                    (
                        <div className="section-8__staff">
                            <div className="section-8__staff__ava">
                                <img src={staff.avatar} alt="avatar here..." />
                            </div>
                            <div className="section-8__staff__info">
                                <h4>{staff.name}</h4>
                                <span>{staff.position}</span>
                            </div>
                        </div>
                    )
                )
            }
        </>
    )
}