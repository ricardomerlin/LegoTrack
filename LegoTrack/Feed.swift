import SwiftUI

struct PostView: View {
    var body: some View {
        RoundedRectangle(cornerRadius: 10)
            .fill(Color.green)
            .frame(height: 100)
//            .padding()
    }
}

struct Feed: View {
    var body: some View {
        List {
            ForEach(0..<10) { index in
                PostView()
            }
        }
        .navigationTitle("My Feed")
    }
}
