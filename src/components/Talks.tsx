import { useScrollAnimation } from '@/utils/animations';
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
type TalkType = 'conference' | 'podcast' | 'meetup';
interface Talk {
  type: TalkType;
  event: string;
  title: string;
  youtubeUrl: string;
}

// Moving the last video to the beginning of the array
const talks: Talk[] = [{
  type: 'meetup',
  event: 'Archilocus',
  title: 'Bienvenue dans l\'ère des architectures composables',
  youtubeUrl: 'https://www.youtube.com/watch?v=_jLo0Zn8vhw'
}, {
  type: 'conference',
  event: 'DevWorld 2024',
  title: 'Beyond micro-services, embrace composable architectures',
  youtubeUrl: 'https://www.youtube.com/watch?v=-192i78pL_w'
}, {
  type: 'podcast',
  event: 'De Nederlandse Kubernetes Podcast',
  title: 'What is Composable Architecture',
  youtubeUrl: 'https://www.youtube.com/watch?v=AewWXCYHu7k'
}, {
  type: 'meetup',
  event: 'HumanTalk Paris',
  title: 'Introduction aux architectures composables',
  youtubeUrl: 'https://www.youtube.com/watch?v=QgfRLJui200'
}, {
  type: 'meetup',
  event: 'Programmez',
  title: 'Débloquez le potentiel des architectures composables !',
  youtubeUrl: 'https://www.youtube.com/watch?v=0HaZ43EXr5A'
}, {
  type: 'conference',
  event: 'BreizhCamp',
  title: 'Débloquez le potentiel des architectures composables !',
  youtubeUrl: 'https://www.youtube.com/watch?v=bUELWM-R7vA'
}, {
  type: 'podcast',
  event: 'Pickbeam',
  title: 'Les architectures composables',
  youtubeUrl: 'https://www.youtube.com/watch?v=WC6bSyEkDyk'
}, {
  type: 'conference',
  event: 'CodecampSDQ',
  title: 'Unlock the potential of composable architecture',
  youtubeUrl: 'https://www.youtube.com/watch?v=2fuq0rAdTU8'
}, {
  type: 'meetup',
  event: 'Theodo',
  title: 'Two React Fans sent to Angular Battleground',
  youtubeUrl: 'https://www.youtube.com/watch?v=K-z_SnaBGTw'
}, {
  type: 'meetup',
  event: 'Theodo',
  title: 'Jailbreak your APIs with GraphQL',
  youtubeUrl: 'https://www.youtube.com/watch?v=SRreCWVZ_yk'
}];
const getYoutubeEmbedUrl = (url: string) => {
  const regExp = /^.*(youtu.be\/|v\/|e\/|u\/\w+\/|embed\/|v=)([^#&?]*).*/;
  const match = url.match(regExp);
  const videoId = match && match[2].length === 11 ? match[2] : null;
  return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
};
const TalkCard = ({
  talk
}: {
  talk: Talk;
}) => {
  const embedUrl = getYoutubeEmbedUrl(talk.youtubeUrl);
  return <Card className="overflow-hidden h-full animate-on-scroll opacity-0 hover:shadow-lg transition-shadow">
      <div className="aspect-video relative">
        <iframe src={embedUrl} title={talk.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="absolute inset-0 w-full h-full" />
      </div>
      <CardContent className="pt-4">
        <div className="inline-block px-2 py-1 mb-2 bg-primary/10 rounded-full text-primary text-xs font-medium">
          {talk.type.charAt(0).toUpperCase() + talk.type.slice(1)}
        </div>
        <h3 className="font-bold mb-1 line-clamp-1">{talk.title}</h3>
        <p className="text-sm text-muted-foreground">{talk.event}</p>
      </CardContent>
    </Card>;
};
const Talks = () => {
  useScrollAnimation();
  return <section id="talks" className="section-padding relative">
      <div className="animate-on-scroll opacity-0">
        <div className="inline-block px-3 py-1 mb-4 bg-primary/10 rounded-full text-primary text-sm font-medium">
          Talks & Videos
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">My Presentations</h2>
        
        <div className="mb-8">
          <p className="text-foreground/80 max-w-3xl mb-6">I frequently share my expertise and insights about engineering, composable architecture, and tech innovation through various conferences, meetups, and podcasts. Here are some of my recent presentations:</p>
        </div>

        <div className="relative mx-14">
          <Carousel className="w-full">
            <CarouselContent>
              {talks.map((talk, index) => <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
                  <TalkCard talk={talk} />
                </CarouselItem>)}
            </CarouselContent>
            <CarouselPrevious className="absolute -left-14 top-1/2 -translate-y-1/2" />
            <CarouselNext className="absolute -right-14 top-1/2 -translate-y-1/2" />
          </Carousel>
        </div>
      </div>
    </section>;
};
export default Talks;