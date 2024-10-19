import { useUser } from '@clerk/clerk-react'
import React, { useMemo } from 'react'
import FinancialRecordForm from './financial-record-form'
import FinancialRecordList from './financial-record-list'
import { useFinancialContext } from '../../contexts/financial-record-context'

function Dashboard() {
    const {user} = useUser()
    const {records} = useFinancialContext()

    const totalMonthly = useMemo(()=>{
      let totalAmount = 0;
      records.forEach((record)=>{
        totalAmount+=record.amount;
      })
      return totalAmount;
    }, [records])
    return (
    <div className='dashboard-container'>
        <h1>Welcome {user?.firstName}! Here Are Your Finances:</h1>
        <FinancialRecordForm/>
        <div>Total Monthly: ${totalMonthly}</div>
        <FinancialRecordList/>
    </div>
  )
}

export default Dashboard