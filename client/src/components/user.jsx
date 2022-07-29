import NftCardList from "./nftCardList"

export default function User({ nftCards }) {
    return  (
        <div>
            {/* <div>
                <div className="m-5 items-center flex justify-center flex-wrap">
                    <label htmlFor="uAddress">User Address: </label>
                    <input type="text" required="true" id="uAddress" name="uAddress" placeholder="0xb794f5ea0ba39494ce839613fffba74279579268" className="border border-black p-2 ml-4 w-96"/>
                </div>
            </div> */}
            <NftCardList/>
        </div>
    )
}