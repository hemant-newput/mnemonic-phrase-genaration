
import { MESSAGES } from "../constants/messageConstant";
import { AddressService } from "../services/addressService";
import { BadRequestError } from "../utils/customError";

export const AddressController = {
    generateAddress: async (req: any, res: any) => {
        try {
            return await AddressService.generateAddress(req.body);
        } catch (error: any) {
            throw new BadRequestError(MESSAGES.ADDRESS_GENERATION_FAILED)
        }
    },
    generateSegWitAddress: async (req: any, res: any) => {
        try {
            return await AddressService.generateSegWitAddress(req.body);
        } catch (error: any) {
            throw new BadRequestError(MESSAGES.ADDRESS_GENERATION_FAILED)
        }
    },
    generateTestnetAddress: async (req: any, res: any) => {
        try {
            return await AddressService.generateTestnetAddress(req.body);
        } catch (error: any) {
            throw new BadRequestError(MESSAGES.ADDRESS_GENERATION_FAILED)
        }
    },
    generateLiteCoinAddress: async (req: any, res: any) => {
        try {
            return await AddressService.generateLiteCoinAddress(req.body);
        } catch (error: any) {
            throw new BadRequestError(MESSAGES.ADDRESS_GENERATION_FAILED)
        }
    },
    fetchAddressInfo: async (req: any, res: any) => {
        try {
            return await AddressService.fetchAddressInfo(req.body.address);
        } catch (error: any) {
            throw new BadRequestError(MESSAGES.ADDRESS_GENERATION_FAILED)
        }
    },

}
