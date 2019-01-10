import { AdvertisingBlock } from "./AdvertisingBlock/index"
import { DiscountWrapper } from "./DiscountWrapper/index"
import { Footer } from "./Footer/index"
import { Header } from "./Header/index"
import { MainBlock } from "./MainBlock/index"
import { NavigationBlock } from "./NavigationBlock/index"
import { UserBlock } from "./UserBlock/index"
import { BasketPage } from "./BasketPage/index"

import { AdvertisingBlock as AdvertisingBlockTest } from "./"
import { DiscountWrapper as DiscountWrapperTest } from "./"
import { Footer as FooterTest } from "./"
import { Header as HeaderTest } from "./"
import { MainBlock as MainBlockTest } from "./"
import { NavigationBlock as NavigationBlockTest } from "./"
import { UserBlock as UserBlockTest } from "./"
import { BasketPage as BasketPageTest } from "./"

describe("Testing importing modules", () => {
  it("testing import of AdvertisingBlock", () => {
    expect(AdvertisingBlockTest).toBe(AdvertisingBlock)
  })
  it("testing import of DiscountWrapper", () => {
    expect(DiscountWrapperTest).toBe(DiscountWrapper)
  })
  it("testing import of Footer", () => {
    expect(FooterTest).toBe(Footer)
  })
  it("testing import of Header", () => {
    expect(HeaderTest).toBe(Header)
  })
  it("testing import of MainBlock", () => {
    expect(MainBlockTest).toBe(MainBlock)
  })
  it("testing import of NavigationBlock", () => {
    expect(NavigationBlockTest).toBe(NavigationBlock)
  })
  it("testing import of UserBlock", () => {
    expect(UserBlockTest).toBe(UserBlock)
  })
  it("testing import of BasketPage", () => {
    expect(BasketPageTest).toBe(BasketPage)
  })
})
