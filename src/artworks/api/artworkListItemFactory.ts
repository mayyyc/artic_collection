import * as Factory from "factory.ts";
import { faker } from "@faker-js/faker";
import { IArtworkListItem } from "./IArtworkListItem";

export const artworkListItemFactory =
  Factory.Sync.makeFactory<IArtworkListItem>({
    id: Factory.each(() => faker.datatype.uuid()),
    title: Factory.each(() => faker.random.words()),
    image_id: Factory.each(() => faker.datatype.uuid()),
    date_display: Factory.each(() =>
      faker.date.past().getUTCFullYear().toString()
    ),
    artist_display: Factory.each(() => faker.name.fullName()),
    place_of_origin: Factory.each(() => faker.address.country()),
    dimensions: Factory.each(
      () => `${faker.random.numeric(3)} x ${faker.random.numeric(2)} cm`
    ),
    artwork_type_title: Factory.each(() => faker.random.word()),
    thumbnail: Factory.each(() => ({
      lqip: faker.image.imageUrl().toString(),
      width: faker.datatype.number(2),
      height: faker.datatype.number(2),
      alt_text: faker.random.words(),
    })),
  });
