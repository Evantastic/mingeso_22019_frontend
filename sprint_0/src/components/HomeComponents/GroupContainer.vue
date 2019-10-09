<template>
  <v-container class="py-5">
    <v-row justify="center" align="center">
      <h1 class="text-title text--black pb-5">Equipo</h1>
    </v-row>

    <v-row justify="center" align="center">
      <v-img
        class="mx-5"
        :src="require('@/assets/imgs/Group.svg')"
        max-height="600"
        max-width="660"
      ></v-img>
      <v-col cols="12">
        <v-row align="center" justify="center">
          <div v-for="person in team" :key="person.name" class="mx-auto">
            <v-card class="mx-1 custom-card-style" max-width="200">
              <v-card-text class="text-center">
                <div>{{person.job}}</div>
                <v-row justify="center">
                  <v-img :src="person.avatar" max-height="80" max-width="80"></v-img>
                </v-row>
                <br />
                <p class="display-1 text--primary">{{person.name}}</p>
                <p>The best</p>
                <div class="text--primary">
                  well meaning and kindly.
                  <br />"a benevolent smile"
                </div>
              </v-card-text>
            </v-card>
            <v-spacer class="py-3"></v-spacer>
          </div>
        </v-row>
      </v-col>
    </v-row>
    <v-img :src="require('@/assets/imgs/divider.svg')" max-height="50" max-width="500"></v-img>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      team: [
        {
          name: "Alan",
          avatar:
            "https://avataaars.io/?avatarStyle=Circle&topType=WinterHat1&accessoriesType=Round&hatColor=Blue03&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Side&eyebrowType=UnibrowNatural&mouthType=Serious&skinColor=Brown",
          job: "Back"
        },
        {
          name: "Nicole",
          avatar:
            "https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraightStrand&accessoriesType=Blank&hairColor=Blonde&facialHairType=Blank&clotheType=Hoodie&clotheColor=Black&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Pale",
          job: "Front"
        },
        {
          name: "Vicente",
          avatar:
            "https://avataaars.io/?avatarStyle=Circle&topType=ShortHairDreads02&accessoriesType=Prescription01&hairColor=Blonde&facialHairType=Blank&clotheType=GraphicShirt&clotheColor=PastelOrange&graphicType=SkullOutline&eyeType=Happy&eyebrowType=RaisedExcited&mouthType=Default&skinColor=Light",
          job: "Back"
        },
        {
          name: "Fabián",
          avatar:
            "https://avataaars.io/?avatarStyle=Circle&topType=LongHairFro&accessoriesType=Round&hairColor=Platinum&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=BlazerSweater&eyeType=Side&eyebrowType=RaisedExcited&mouthType=Serious&skinColor=Black",
          job: "Front"
        },
        {
          name: "Gabriel",
          avatar:
            "https://avataaars.io/?avatarStyle=Circle&topType=ShortHairDreads01&accessoriesType=Blank&hairColor=BlondeGolden&facialHairType=Blank&clotheType=Hoodie&clotheColor=Gray01&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light",
          job: "Back"
        },
        {
          name: "Nicolás",
          avatar:
            "https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortWaved&accessoriesType=Prescription02&hairColor=Black&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=Hoodie&clotheColor=Black&eyeType=Squint&eyebrowType=UnibrowNatural&mouthType=Serious&skinColor=Pale",
          job: "Front"
        }
      ]
    };
  }
};
</script>

<style>
.custom-card-style {
  transition: background 0.2s ease-out !important;
}
.custom-card-style:hover {
  background: #d9d9d9 !important;
}
</style>