

const people = [
    {
    name: 'Leslie Alexander',
    role: 'Co-Founder / CEO',
    imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
    name: 'Michael Foster',
    role: 'Co-Founder / CEO',
    imageUrl:
        'https://media.istockphoto.com/id/1410538853/photo/young-man-in-the-public-park.webp?b=1&s=170667a&w=0&k=20&c=pGdjFVdK-_BhTa6PMy5VNcXdbxVNngzg-OPzMfJKrG8=',
    },
    {
    name: 'Dries Vincent',
    role: 'Business Relations',
    imageUrl:
        'https://media.istockphoto.com/id/1372641621/photo/portrait-of-a-businessman-on-gray-background.jpg?s=612x612&w=0&k=20&c=G7RmU1vHuzqIscJDOVrUVRl_-yIOIl0ws3f4RRc8qHU=',
    },
    {
    name: 'Lindsay Walton',
    role: 'Front-end Developer',
    imageUrl:
        'https://fortune.com/img-assets/wp-content/uploads/2015/04/purdie-vaughns-photo.jpeg',
    },
]

export default function Leaders(){
    return(
        <div className="bg-white lg:py-24 md:py-10 py-4">
            <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
                <div className="max-w-2xl">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our leadership</h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                    Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper
                    suspendisse.
                </p>
                </div>
                <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                {people.map((person) => (
                    <li key={person.name}>
                    <div className="flex items-center gap-x-6">
                        <img className="h-16 w-16 rounded-full object-cover" src={person.imageUrl} alt="" />
                        <div>
                        <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                        <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                        </div>
                    </div>
                    </li>
                ))}
                </ul>
            </div>
        </div>
)
}