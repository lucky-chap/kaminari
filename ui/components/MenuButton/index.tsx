import React from "react"
import * as DropdownMenu from "@radix-ui/react-dropdown-menu"

import {
  HamburgerMenuIcon,
  DotFilledIcon,
  CheckIcon,
  ChevronRightIcon,
} from "@radix-ui/react-icons"

import "./styles.css"

function MenuButton() {
  const [bookmarksChecked, setBookmarksChecked] = React.useState(true)
  const [urlsChecked, setUrlsChecked] = React.useState(false)
  const [person, setPerson] = React.useState("pedro")

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        {/* <button className="IconButton" aria-label="Customise options">
          <HamburgerMenuIcon />
        </button> */}

        <button
          aria-label="Customise options"
          className="group rounded-3xl bg-white px-7 py-2 text-sm font-bold text-black"
        >
          <span className="">Menu</span>
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className="DropdownMenuContent" sideOffset={5}>
          <DropdownMenu.Item className="DropdownMenuItem">
            Next Page <div className="RightSlot">⌘+N</div>
          </DropdownMenu.Item>
          <DropdownMenu.Item className="DropdownMenuItem">
            Previous Page <div className="RightSlot">⌘+P</div>
          </DropdownMenu.Item>
          <DropdownMenu.Item className="DropdownMenuItem" disabled>
            Sign in <div className="RightSlot">⇧+⌘+N</div>
          </DropdownMenu.Item>
          <DropdownMenu.Sub>
            <DropdownMenu.SubTrigger className="DropdownMenuSubTrigger">
              All Pages
              <div className="RightSlot">
                <ChevronRightIcon />
              </div>
            </DropdownMenu.SubTrigger>
            <DropdownMenu.Portal>
              <DropdownMenu.SubContent
                className="DropdownMenuSubContent"
                sideOffset={2}
                alignOffset={-5}
              >
                <DropdownMenu.Item className="DropdownMenuItem">
                  Go Home <div className="RightSlot">⌘+H</div>
                </DropdownMenu.Item>
                <DropdownMenu.Item className="DropdownMenuItem">
                  Blog
                </DropdownMenu.Item>
                <DropdownMenu.Item className="DropdownMenuItem">
                  Projects
                </DropdownMenu.Item>
                <DropdownMenu.Separator className="DropdownMenu.Separator" />
                <DropdownMenu.Item className="DropdownMenuItem">
                  About
                </DropdownMenu.Item>
              </DropdownMenu.SubContent>
            </DropdownMenu.Portal>
          </DropdownMenu.Sub>

          <DropdownMenu.Separator className="DropdownMenuSeparator" />

          <DropdownMenu.CheckboxItem
            className="DropdownMenuCheckboxItem"
            checked={bookmarksChecked}
            onCheckedChange={setBookmarksChecked}
          >
            <DropdownMenu.ItemIndicator className="DropdownMenuItemIndicator">
              <CheckIcon />
            </DropdownMenu.ItemIndicator>
            Star Repo
          </DropdownMenu.CheckboxItem>
          <DropdownMenu.CheckboxItem
            className="DropdownMenuCheckboxItem"
            checked={urlsChecked}
            onCheckedChange={setUrlsChecked}
          >
            <DropdownMenu.ItemIndicator className="DropdownMenuItemIndicator">
              <CheckIcon />
            </DropdownMenu.ItemIndicator>
            Tell your friends
          </DropdownMenu.CheckboxItem>

          <DropdownMenu.Separator className="DropdownMenuSeparator" />

          <DropdownMenu.Label className="DropdownMenuLabel">
            Links
          </DropdownMenu.Label>
          {/* <DropdownMenu.RadioGroup value={person} onValueChange={setPerson}>
            <DropdownMenu.RadioItem
              className="DropdownMenuRadioItem"
              value="pedro"
            >
              <DropdownMenu.ItemIndicator className="DropdownMenuItemIndicator">
                <DotFilledIcon />
              </DropdownMenu.ItemIndicator>
              Pedro Duarte
            </DropdownMenu.RadioItem>
            <DropdownMenu.RadioItem
              className="DropdownMenuRadioItem"
              value="colm"
            >
              <DropdownMenu.ItemIndicator className="DropdownMenuItemIndicator">
                <DotFilledIcon />
              </DropdownMenu.ItemIndicator>
              Colm Tuite
            </DropdownMenu.RadioItem>
          </DropdownMenu.RadioGroup> */}

          <DropdownMenu.Item className="DropdownMenuItem">
            <a
              href="https://heylel.vercel.app"
              target="_blank"
              rel="noreferrer"
              className="cursor-default"
            >
              Author
            </a>
          </DropdownMenu.Item>
          <DropdownMenu.Item className="DropdownMenuItem">
            <a
              href="https://github.com/lucky-chap/kaminari"
              target="_blank"
              rel="noreferrer"
              className="cursor-default"
            >
              Source Code
            </a>
          </DropdownMenu.Item>

          <DropdownMenu.Arrow className="DropdownMenuArrow" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}

export default MenuButton
