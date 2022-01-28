import Header from '../../components/header'
// import { people } from '../../collection/collection'
import Link from 'next/link'
import { connectToDatabase } from '../../util/mongodb'

export default function UserHome({ patients }) {
  return (
    <>
      <Header/>
        <header className="bg-white pt-6">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:py-6 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">Patient Records</span>
          </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex">
            <div className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-rose-800 bg-rose-100 hover:bg-rose-200">
              <Link href='/home/addNew' >
              New
              </Link>
            </div>
          </div>
          </div>
          </div>
        </header>
        <main>
          <div className="max-w-7xl mx-auto pb-6 sm:px-6 lg:px-8">
            <div className="flex flex-col">
      <div className="-my-2 sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Name
                  </th>
              
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs hidden sm:table-cell font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Hospital
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs hidden sm:table-cell font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Disease
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left hidden sm:table-cell text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Gender
                  </th>
                  <th scope="col">
                    <span className="sr-only">View</span>
                  </th>
                
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {patients.map((patient) => (
                  <tr key={patient.name}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <img className="h-10 w-10 rounded-full" src={patient.image} alt="" />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{patient.name}</div>
                          <div className="text-sm text-gray-500">{patient.mobile}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm hidden sm:table-cell text-gray-900">{patient.hospital}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm hidden sm:table-cell text-gray-900">{patient.disease}</div>
                    </td>
                    <td className="px-6 py-4 hidden sm:table-cell whitespace-nowrap text-sm text-gray-500">{patient.gender}</td>
                    <td className="pr-6 py-4 whitespace-nowrap text-left text-sm font-medium">
                      <button type="button"
                        className="bg-rose-800 p-1 rounded-3xl text-rose-800 hover:text-rose-800" >
                          <div className="text-white hover:text-white mx-4 my-0" >
                            <Link href='/home/id'>
                              View
                            </Link>
                          </div>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>
    </>
  )
}

export async function getServerSideProps(context) {
  const { db } = await connectToDatabase();

  const patients = await db.collection("patients").find({}).toArray();

  return {
    props: {
      patients: JSON.parse(JSON.stringify(patients)),
    },
  };
  
}
