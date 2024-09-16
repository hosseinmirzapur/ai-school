"use client"

import Chart from "@/components/students/Chart"
import { Card, CardBody } from "@nextui-org/react"
import { ChartItem } from "./data"

interface IProps {
   chartData: ChartItem[]
   year: number
}

const ChartCard: React.FC<IProps> = ({ chartData, year }) => {
   return (
      <Card className="w-11/12 h-[400px]">
         <CardBody>
            <Chart chartData={chartData} year={year} />
         </CardBody>
      </Card>
   )
}

export default ChartCard
