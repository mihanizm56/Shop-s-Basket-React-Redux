import { EditNumber } from "./EditNumber/index"
import { FindComponent } from "./FindComponent/index"
import { FreeCall } from "./FreeCall/index"
import { LiveStream } from "./LiveStream/index"
import { Number as NumberItem } from "./Number/index"
import { NumberOfItems } from "./NumberItems/index"
import { Star } from "./Star/index"
import { Youtube } from "./YouTube/index"

import { EditNumber as EditNumberTest } from "./"
import { FindComponent as FindComponentTest } from "./"
import { FreeCall as FreeCallTest } from "./"
import { LiveStream as LiveStreamTest } from "./"
import { Number as NumberTest } from "./"
import { NumberOfItems as NumberOfItemsTest } from "./"
import { Star as StarTest } from "./"
import { Youtube as YoutubeTest } from "./"

describe("Testing importing components", () => {
  it("testing import of EditNumber", () => {
    expect(EditNumberTest).toBe(EditNumber)
  })
  it("testing import of FindComponent", () => {
    expect(FindComponentTest).toBe(FindComponent)
  })
  it("testing import of FreeCall", () => {
    expect(FreeCallTest).toBe(FreeCall)
  })
  it("testing import of LiveStream", () => {
    expect(LiveStreamTest).toBe(LiveStream)
  })
  it("testing import of Number", () => {
    expect(NumberTest).toBe(NumberItem)
  })
  it("testing import of NumberOfItems", () => {
    expect(NumberOfItemsTest).toBe(NumberOfItems)
  })
  it("testing import of Star", () => {
    expect(StarTest).toBe(Star)
  })
  it("testing import of Youtube", () => {
    expect(YoutubeTest).toBe(Youtube)
  })
})
