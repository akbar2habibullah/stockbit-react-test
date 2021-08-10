import React from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

const MovieCard = ({ title, year, id, type, poster }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <div className="max-w-xs bg-white shadow-box rounded-lg overflow-hidden">
        <div className="p-4 h-20 text-center flex items-center">
          <h1 className="movie-title text-gray-900 font-bold text-lg md:text-xl uppercase truncate-title flex-grow">
            {title}
          </h1>
        </div>
        <LazyLoadImage
          className="poster h-56 md:h-60 lg:h-72 w-full object-cover"
          src={poster}
          alt={title}
          effect="blur"
          onClick={onOpen}
        />
        <div className="flex items-center justify-between px-4 py-2 bg-yellow-600 h-16">
          <h1 className="year-type text-white font-bold text-sm md:text-md mr-2">
            {year} - {type}
          </h1>
          <Link to={`/detail/${id}`}>
            <button className="px-3 py-1 bg-white text-xs md:text-sm text-yellow-600 hover:text-yellow-400 font-semibold rounded">
              Detail
            </button>
          </Link>
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={onClose} size="sm">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div className="w-full flex justify-center pb-5">
              <LazyLoadImage
                className="h-full"
                src={poster}
                alt={title}
                effect="blur"
                onClick={onOpen}
              />
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default MovieCard;
