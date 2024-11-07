import React from 'react'
import Image from 'next/image'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { EFILTER, ESEARCH_QUERY } from '@/enums'

type IMenu = {
    id: string,
    name: string,
}

const menu: IMenu[] = [
    { id: "default", name: 'Default'},
    { id: EFILTER.ASC, name: 'Ascending'},
    { id: EFILTER.DESC, name: 'Descending'},
    { id: EFILTER.MOST, name: 'Most'},
    { id: EFILTER.LEAST, name: 'Least'},
]

const Filter: React.FC = () => {
    const params = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();
    const [choice, setChoice] = React.useState<string>('default');
  
    const handleChoice = (optionId: string) => {
        const newParams = new URLSearchParams(params?.toString());
        if (optionId === 'default') {
            newParams.delete(ESEARCH_QUERY.SORT_ORDER);
        } else {
            newParams.set(ESEARCH_QUERY.SORT_ORDER, optionId.toString());
        }
        router.push(`${pathname}?${newParams.toString()}`);
        setChoice(optionId);
    };

    React.useEffect(() => {
        const tab = menu.find((tab: IMenu) => `${tab.id}` === choice);
        if (tab) {
            const queryType = params?.get(ESEARCH_QUERY.SORT_ORDER);
            if (queryType === undefined || queryType === null || queryType === '') {
                setChoice('default');
            } else {
                setChoice(queryType);
            }
        }
      }, [pathname, params, choice]);

  return (
    <button
        type="button"
        title='Filter'
        className='group relative inline-flex rounded-md p-2 bg-white border dark:border-gray-700 dark:bg-gray-800 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'
    >
        <Image
            src="/assets/icons/nav/filter.png"
            width={20}
            height={20}
            alt="filter_icon"
        />

        <ul className="hidden group-hover:block z-10 absolute right-0 mt-7 w-max rounded-lg p-1 bg-white dark:bg-slate-700 shadow-lg text-left" style={{boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)'}}>
            {menu.map((item: IMenu) => (
                <li
                    key={item.id}
                    className={`rounded-md flex items-center space-x-2 pl-1 pr-2 py-1 text-sm border border-transparent ${item.id === choice ? 'bg-green-100/80 dark:bg-green-500/30 border-green-200 dark:border-green-400/20 text-green-500 dark:text-green-400 font-medium' : 'hover:bg-slate-100 dark:bg-slate-600 font-normal text-gray-400'}`}
                    title={item.name}
                    onClick={() => handleChoice(item.id)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="1rem" height="1rem" className={`${item.id === choice ? 'opacity-100' : 'opacity-0'} text-green-500 dark:text-green-400`}><path stroke="rgb(34 197 94)" fill="rgb(34 197 94)" d="M 26.980469 5.9902344 A 1.0001 1.0001 0 0 0 26.292969 6.2929688 L 11 21.585938 L 4.7070312 15.292969 A 1.0001 1.0001 0 1 0 3.2929688 16.707031 L 10.292969 23.707031 A 1.0001 1.0001 0 0 0 11.707031 23.707031 L 27.707031 7.7070312 A 1.0001 1.0001 0 0 0 26.980469 5.9902344 z"/></svg>
                    <span>{item.name}</span>
                </li>
            ))}
        </ul>
    </button>
  )
}

export default React.memo(Filter)