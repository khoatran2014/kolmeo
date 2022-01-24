import React, { useEffect, useState } from "react";
import * as Styled from "./styles";
import { useForm } from "react-hook-form";
import useAxios from "axios-hooks";
import moment from "moment";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const HomePage: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();
  const [news, setNews] = useState([]);
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(new Date());
  const [{ data, loading, error }, loadNews] = useAxios(
    {
      url: `https://newsapi.org/v2/everything?q=${watch(
        "searchData"
      )}&from=${moment(startDate).format("YYYY-MM-DD")}&to=${moment(
        endDate
      ).format(
        "YYYY-MM-DD"
      )}&sortBy=popularity&apiKey=76a8934356834e98a75ae123bcfe489e`,
      method: "GET",
      responseType: "json",
      headers: {
        "Content-Type": "application/json",
      },
    },
    { manual: true }
  );

  const onSubmit = (data: any) => {
    loadNews();
  };

  const goToDetailPage = (url: string | URL | undefined) => {
    window.open(url, "_blank");
  };

  useEffect(() => {
    if (data) {
      setNews(data.articles);
    }
  }, [data, loadNews]);

  return (
    <Styled.Container>
      <Styled.Form onSubmit={handleSubmit(onSubmit)}>
        <Styled.FieldSetSearch>
          <Styled.SearchLabel>FILTER NEWS</Styled.SearchLabel>
          <Styled.SearchContainer>
            <Styled.TextField
              placeholder="Key"
              className={"search"}
              {...register("searchData", { required: true })}
            />
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
            />
            <Styled.SubmitButton type="submit" value="Search" />
          </Styled.SearchContainer>
          {errors?.searchData?.type === "required" && (
            <p>The key field is required</p>
          )}
          {loading && "Loading news........"}
        </Styled.FieldSetSearch>
      </Styled.Form>
      <Styled.NewsContainer>
        {news.map((item, index) => (
          <Styled.NewsItem onClick={() => goToDetailPage(item["url"])}>
            <Styled.NewsImg>
              <img src={item["urlToImage"]} alt="imageNews" />
            </Styled.NewsImg>
            <Styled.NewsContent>
              <Styled.NewsTitle>{item["title"]}</Styled.NewsTitle>
              <Styled.NewsAuthorAndDate>
                <Styled.NewsAuthor>{item["author"]}</Styled.NewsAuthor>
                <Styled.NewsPublishedAt>
                  {moment(item["publishedAt"]).format("DD MMM YYYY")}
                </Styled.NewsPublishedAt>
              </Styled.NewsAuthorAndDate>
            </Styled.NewsContent>
          </Styled.NewsItem>
        ))}
      </Styled.NewsContainer>
    </Styled.Container>
  );
};

export default HomePage as React.ComponentType;
