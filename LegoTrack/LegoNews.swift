import SwiftUI

struct Lego_News: View {
    var newsItems = [
        "Breaking News: New Study Reveals Surprising Results",
        "Weather Forecast: Sunny Skies Expected All Week",
        "Sports Update: Team Wins Championship Title",
        "Entertainment News: Exciting New Movie Releases Announced"
    ]

    var body: some View {
        List(newsItems, id: \.self) { newsItem in
            VStack(alignment: .leading, spacing: 8) {
                Text(newsItem)
                    .font(.headline)
                Text("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus commodo sapien eget tellus fermentum, et commodo sem vestibulum.")
                    .font(.subheadline)
                    .foregroundColor(.secondary)
            }
            .padding(.vertical, 8)
        }
        .navigationTitle("News")
    }
}


