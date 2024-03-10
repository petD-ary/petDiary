import { Caption, Title } from "@/constants/Typography/TypographyList";
import { getDate, getDay, getHours } from "@/utils/calculateDay";

const CALENDAR_LIST = [
    {
        id: '1',
        title: '네로 병원가기',
        address: '히히 동물병원',
        lat: 37.5222644,
        lng: 127.0461,
        alarm: '24h',
        repeat: 'monthly',
        repeatId: '1',
        startTime: '2024-05-05T14:00:00.000Z',
        finishTime: '2024-05-05T15:00:00.000Z',
        memo: '이건 메모입니다..',
    },
    {
        id: '2',
        title: '콩이 미용하기',
        address: '히히 미용실',
        lat: 37.5222644,
        lng: 127.0461,
        alarm: '24h',
        repeat: 'none',
        repeatId: null,
        startTime: '2024-05-05T18:00:00.000Z',
        finishTime: '2024-05-05T19:00:00.000Z',
        memo: '이건 메모입니다..',
    },
]

const CalendarList = () => {
    return (
        <div>
            {CALENDAR_LIST.map((calendar) => (
                <div className="flex mb-1">
                    <div className="w-24 px-6 py-3 flex flex-col justify-center items-center">
                        <div className={`${Title.title3}`}>{getDate(calendar.startTime)}</div>
                        <div className={`${Caption.caption2}`}>{getDay(calendar.startTime)}요일</div>
                    </div>
                    <div className="border-l px-3 py-3 w-full">
                        <div>{calendar.title}</div>
                        <div className={`${Caption.caption3} flex justify-between`}>
                            <div className="text-text-secondary">{calendar.address}</div>
                            <div>{getHours(calendar.startTime)} ~ {getHours(calendar.finishTime)}</div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default CalendarList;