import HeroRepository from "../repositories/heroRepository.js";
import HeroService from "../services/heroService.js";

const generateInstance = ({
    filePath
}) => {

    //here goes all db connections

    const heroRepository = new HeroRepository({
        file: filePath
    })

    const heroService = new heroService({
        heroRepository
    })

    return heroService
}

export { generateInstance }