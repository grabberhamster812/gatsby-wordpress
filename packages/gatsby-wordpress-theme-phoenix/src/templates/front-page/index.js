import React from "react";
import Layout from "../../components/layout";
import Hero from "../../components/home/hero";
import Search from "../../components/home/search";
import FeaturedPosts from "../../components/home/feature-posts";
import LatestPosts from '../../components/home/latest-posts';
import Error from "../../components/error";
import { isEmpty } from 'lodash';
import ClientSearch from "../../components/client-search";

const FrontPage = ( props ) => {

	const {
		      pageContext: {
			      page: { title, frontPageMeta: { banner, searchSection, featuredPostsSection } },
			      posts,
			      bookData: { allPosts, options }
		      }
	      } = props;


	return (
		<Layout>
			{
				! isEmpty( props.pageContext ) ? (
					<>
						<Hero data={ banner } />
						<Search data={ searchSection }/>
						<ClientSearch books={ allPosts } engine={options}/>
						<FeaturedPosts data={ featuredPostsSection }/>
						<LatestPosts data={ posts }/>
					</>
				) : (
					<Error message="Something Went Wrong"/>
				)
			}
		</Layout>
	)
};
export default FrontPage;

