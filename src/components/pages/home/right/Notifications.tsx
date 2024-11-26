"use client"

import { INotification } from "@/types"
import {
	Badge,
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownTrigger,
} from "@nextui-org/react"

import { GoBellFill } from "react-icons/go"

interface IProps {
	notifications: INotification[]
}

const Notifications: React.FC<IProps> = ({ notifications }) => {
	const checkSeen = () => {
		let seen = true
		notifications.map((notif) => {
			if (!notif.seen) {
				seen = false
				return
			}
		})
		return seen
	}

	return (
		<Dropdown>
			<DropdownTrigger>
				<div className="h-10 w-10 rounded-full flex items-center justify-center bg-gray-100 cursor-pointer hover:shadow-xl">
					{checkSeen() === false ? (
						<Badge content={""} color="success">
							<GoBellFill size={22} />
						</Badge>
					) : (
						<GoBellFill size={22} />
					)}
				</div>
			</DropdownTrigger>
			<DropdownMenu>
				{notifications.map((notif) => (
					<DropdownItem
						key={notif.id}
						className={`${notif.seen ? "opacity-30" : ""} w-full`}
					>
						<div className="font-semibold text-sm">
							از طرف:{" "}
							{notif.type === "system"
								? "سیستم"
								: notif.type === "teacher"
								? "معلم"
								: ""}
						</div>
						<div className="text-lg">{notif.text}</div>
					</DropdownItem>
				))}
			</DropdownMenu>
		</Dropdown>
	)
}

export default Notifications
